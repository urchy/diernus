One-line: success/error banner shown in place of the form after submit.

```jsx
<FormFeedback tone="success"><b>Obrigado.</b> Recebemos a tua mensagem e respondemos dentro de 24h úteis.</FormFeedback>
<FormFeedback tone="error" action="TENTAR OUTRA VEZ" onAction={retry}><b>Não conseguimos enviar agora.</b></FormFeedback>
```

Notes: on success the form fields are hidden entirely, not just disabled.
