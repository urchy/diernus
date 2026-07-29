One-line: the ruled table of measurements — a 1px-gap grid over a hairline background, so cells are separated by drawn rules, not space.

```jsx
<SpecGrid columns={6}>
  <SpecCell value={2032} unit="MM" label="COMPRIMENTO" />
  <SpecCell value={90} unit="KG" label="PESO" />
</SpecGrid>
```

Notes: never add `gap` beyond 1px and never round the corners — this is a drawing table, not a card deck.
