import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { category } from "@/lib/constants";

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
