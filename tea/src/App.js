function Drink({ name }) {
  if (name === 'tea') {
    name = ['leaf', '15–70 mg/cup', '4,000+ years']
  } else {
    name = ['bean', '80–185 mg/cup', '1,000+ years']
  }
  return (
    <section>
      <h1>{}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name[0]}</dd>
        <dt>Caffeine content</dt>
        <dd>{name[1]}</dd>
        <dt>Age</dt>
        <dd>{name[2]}</dd>
      </dl>
    </section>
  );
}

export default function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
