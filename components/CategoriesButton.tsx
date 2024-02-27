import { Button } from "./ui/button";

interface Props {
  setCategory: (category: string | null) => void;
}

const CategoryButton = ({ setCategory }: Props) => {
  const categoriesArray = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <>
      {categoriesArray.map((category) => {
        return (
          <Button
            key={category}
            onClick={() => {
              setCategory(category);
            }}
            className="capitalize"
          >
            {category}
          </Button>
        );
      })}
      <Button
        onClick={() => {
          setCategory("");
        }}
        variant={"destructive"}
      >
        Reset filter
      </Button>
    </>
  );
};

export default CategoryButton;
