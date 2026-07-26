import TagButton from './TagButton';

export default function SideMenu() {
  const categories = [
    {
      uniqueId: 1,
      title: "آخر المقالات",
      c: (
        <div>
          <span>;)</span>
        </div>
      ),
    },

    {
      uniqueId: 2,
      title: "الأكثر قراءة",
      c: (
        <div>
          <img
            style={{ width: "100px" }}
            src="https://www.thespruce.com/thmb/ClRANI4jTWhkGeNhvJtArRhlGSA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-difference-between-trees-and-shrubs-3269804-hero-a4000090f0714f59a8ec6201ad250d90.jpg"
            alt="ERROR"
          />
        </div>
      ),
    },

    {
      uniqueId: 3,
      title: "IMPORTANT",
      c: (
        <>
          <h1>Click Me</h1>
          <span>👍🏻</span>
        </>
      ),
    },
  ];

  const categoriesList = categories.map((cat) => {
    return (
      <TagButton key={cat.uniqueId} title={cat.title}>
        {cat.c}
      </TagButton>
    );
  });

  return (
    <div style={{ border: "solid teal 5px" }}>
      {categoriesList}
    </div>
  );
}
