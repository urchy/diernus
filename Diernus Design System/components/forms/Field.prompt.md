One-line: the only form input in the system — mono uppercase label, 2px focus underline in cobalt, amber for required + errors.

```jsx
<Field id="cf-email" label="Email" type="email" required placeholder="nome@empresa.pt" />
<Field id="cf-msg" label="Mensagem" rows={5} required placeholder="Conta-nos o que precisas…" />
```

Notes: red (`--stamp`) is reserved for approvals — validation uses amber. Placeholders render italic.
