(() => {
  'use strict';

  // Studieportal V6.2 – klientbaserat PIN-lås.
  // PIN-koden lagras inte i klartext; endast dess SHA-256-hash finns här.
  // Standard-PIN för denna version: 4826
  const PIN_HASH = '0a4e3e70597a358b9447fa8a647aadf5b76dde95c8e4ab02e5f8cee6caa1cd28';
  const SESSION_KEY = 'studyportal_pin_unlocked_v62';
  const FAIL_KEY = 'studyportal_pin_failures_v62';
  const LOCK_KEY = 'studyportal_pin_lock_until_v62';
  const MAX_FAILURES = 5;
  const LOCK_MS = 30_000;

  const gate = document.getElementById('pinGate');
  const shell = document.getElementById('portalShell');
  const form = document.getElementById('pinForm');
  const input = document.getElementById('pinInput');
  const status = document.getElementById('pinStatus');
  const lockBtn = document.getElementById('lockBtn');

  if (!gate || !shell || !form || !input || !status) return;

  const now = () => Date.now();
  const getFailures = () => Number(sessionStorage.getItem(FAIL_KEY) || 0);
  const setFailures = (n) => sessionStorage.setItem(FAIL_KEY, String(n));
  const getLockUntil = () => Number(sessionStorage.getItem(LOCK_KEY) || 0);

  function setStatus(message, kind = '') {
    status.textContent = message;
    status.className = `pin-status${kind ? ` ${kind}` : ''}`;
  }

  function unlock() {
    sessionStorage.setItem(SESSION_KEY, '1');
    sessionStorage.removeItem(FAIL_KEY);
    sessionStorage.removeItem(LOCK_KEY);
    gate.hidden = true;
    gate.setAttribute('aria-hidden', 'true');
    shell.hidden = false;
    shell.setAttribute('aria-hidden', 'false');
    document.body.classList.remove('portal-locked');
    input.value = '';
    setStatus('');
  }

  function lock({ focus = true } = {}) {
    sessionStorage.removeItem(SESSION_KEY);
    shell.hidden = true;
    shell.setAttribute('aria-hidden', 'true');
    gate.hidden = false;
    gate.setAttribute('aria-hidden', 'false');
    document.body.classList.add('portal-locked');
    input.value = '';
    setStatus('');
    if (focus) window.setTimeout(() => input.focus(), 20);
  }

  async function hashPin(value) {
    const bytes = new TextEncoder().encode(value);
    const digest = await crypto.subtle.digest('SHA-256', bytes);
    return [...new Uint8Array(digest)].map(b => b.toString(16).padStart(2, '0')).join('');
  }

  function remainingSeconds() {
    return Math.max(0, Math.ceil((getLockUntil() - now()) / 1000));
  }

  function updateLockMessage() {
    const seconds = remainingSeconds();
    if (seconds > 0) {
      input.disabled = true;
      form.querySelector('button[type="submit"]').disabled = true;
      setStatus(`För många felaktiga försök. Försök igen om ${seconds} sekunder.`, 'error');
      window.setTimeout(updateLockMessage, 500);
    } else {
      sessionStorage.removeItem(LOCK_KEY);
      setFailures(0);
      input.disabled = false;
      form.querySelector('button[type="submit"]').disabled = false;
      setStatus('Du kan försöka igen.', 'ok');
      input.focus();
    }
  }

  input.addEventListener('input', () => {
    input.value = input.value.replace(/\D/g, '').slice(0, 4);
    if (status.classList.contains('error') && remainingSeconds() === 0) setStatus('');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (remainingSeconds() > 0) {
      updateLockMessage();
      return;
    }

    const pin = input.value.trim();
    if (!/^\d{4}$/.test(pin)) {
      setStatus('Ange fyra siffror.', 'error');
      input.focus();
      return;
    }

    try {
      const candidate = await hashPin(pin);
      if (candidate === PIN_HASH) {
        unlock();
        return;
      }
    } catch (err) {
      setStatus('Webbläsaren kunde inte kontrollera PIN-koden. Öppna sidan via HTTPS.', 'error');
      return;
    }

    const failures = getFailures() + 1;
    setFailures(failures);
    input.value = '';

    if (failures >= MAX_FAILURES) {
      sessionStorage.setItem(LOCK_KEY, String(now() + LOCK_MS));
      updateLockMessage();
    } else {
      const left = MAX_FAILURES - failures;
      setStatus(`Fel PIN-kod. ${left} försök kvar innan kort spärr.`, 'error');
      input.focus();
    }
  });

  lockBtn?.addEventListener('click', () => lock());

  // Ctrl/Cmd + Shift + L låser portalen manuellt när den är upplåst.
  document.addEventListener('keydown', (event) => {
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === 'l') {
      if (!shell.hidden) {
        event.preventDefault();
        lock();
      }
    }
  });

  document.body.classList.add('portal-locked');
  if (sessionStorage.getItem(SESSION_KEY) === '1') {
    unlock();
  } else {
    lock({ focus: false });
    if (remainingSeconds() > 0) updateLockMessage();
    else window.setTimeout(() => input.focus(), 30);
  }
})();
