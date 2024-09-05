import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import React from "react";

function Ratings({
  includeRating,
  selectedRating,
}: {
  includeRating: (rating: number) => void;
  selectedRating: number;
}) {
  return (
    <div>
      <h4 className="text-base font-medium mb-2">Rating</h4>
      <div className="space-y-2">
        <Label
          onClick={() => includeRating(0)}
          className={cn(
            selectedRating === 0 && "bg-orange-400 w-20 p-2 rounded-sm",
            "flex items-center gap-2 cursor-pointer"
          )}
        >
          <div />
          Any
        </Label>
        <Label
          onClick={() => includeRating(4)}
          className={cn(
            selectedRating === 4 && "bg-orange-400 w-40 p-2 rounded-sm",
            "flex items-center gap-2 cursor-pointer"
          )}
        >
          <div />4 stars and above
        </Label>
        <Label
          onClick={() => includeRating(3)}
          className={cn(
            selectedRating === 3 && "bg-orange-400 w-40 p-2 rounded-sm",
            "flex items-center gap-2 cursor-pointer"
          )}
        >
          <div />3 stars and above
        </Label>
        <Label
          onClick={() => includeRating(2)}
          className={cn(
            selectedRating === 2 && "bg-orange-400 w-40 p-2 rounded-sm",
            "flex items-center gap-2 cursor-pointer"
          )}
        >
          <div />2 stars and above
        </Label>
      </div>
    </div>
  );
}

export default Ratings;
