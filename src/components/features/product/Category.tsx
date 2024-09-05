import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const category = [
  { name: "Electronics" },
  { name: "Bags" },
  { name: "Outdoor" },
  { name: "Furniture" },
  { name: "Health" },
];

function Category({
  selectedCategory,
  includeCategory,
}: {
  selectedCategory: any;
  includeCategory: (cat: string) => void;
}) {
  return (
    <div>
      <h4 className="text-base font-medium mb-2">Category</h4>
      <div className="space-y-2">
        {category.map((category) => (
          <Button
            key={category.name}
            variant="outline"
            size="sm"
            className={cn(
              selectedCategory.includes(category.name) && "bg-orange-400",
              "flex items-center gap-2 hover:bg-orange-400"
            )}
            onClick={() => {
              console.log("ll");
              includeCategory(category.name);
            }}
          >
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Category;
