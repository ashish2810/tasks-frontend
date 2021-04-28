import { dividerClasses } from "@material-ui/core";
import { FC, ReactNode } from "react";

export const List: FC<{ divider: ReactNode, children?: false | React.ReactNodeArray }> = (props) => {
  console.log("children are", props.children);
  let children = props.children ? props.children : [];

  return <div>
    {
      Array.from(
        { length: children.length * 2 - 1 },
        (_, i) => i % 2 == 0 ? children[i / 2] : props.divider
      )
    }
  </div>
}