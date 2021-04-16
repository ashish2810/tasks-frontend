/** @jsx jsx */
import { ClassNames, css, jsx } from "@emotion/react";
import React, { ReactNode, useRef, useContext, useEffect, useState, ReactNodeArray, ReactElement, FC, createContext } from "react";

function toStackItem(node: ReactNode): ReactNode {
  return ((node as ReactElement).type == undefined || (node as ReactElement).type != StackItem)
    ? <StackItem>{node}</StackItem>
    : node;
}

const StackContext = createContext({ updateIntermHeight: (height: number) => { } });

export const Stack: FC<{className?: string}> = (props) => {
  let heightInterm = useRef(0);

  let [height, updateHeight] = useState(0);

  useEffect(() => updateHeight(heightInterm.current));

  var childrenNode: ReactNode;

  let children = props.children;
  if (children != undefined)
    childrenNode = Array.isArray(children)
      ? (children as ReactNodeArray).map((child) => toStackItem(child))
      : toStackItem(children);

  return (
    <div className={props.className} css={css`position: relative;`}>
      <StackContext.Provider value={{
        updateIntermHeight: (height: number) => {
          // if (props.height == undefined)
          //   heightInterm.current = Math.max(heightInterm.current, height);
        }
      }}>
        {childrenNode}
      </StackContext.Provider>
    </div >
  )
}

export class Position {
  horizontal: "left" | "right" | "center" = "left"
  vertical: "top" | "bottom" | "center" = "top";

  constructor(horizontal: "left" | "right" | "center" = "left", vertical: "top" | "bottom" | "center" = "top") {
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
}

interface StackItemProps {
  position?: Position;
  height?: string;
  width?: string;
}

export const StackItem: FC<StackItemProps> = (props) => {

  var divRef = useRef<HTMLDivElement>(null);

  let { updateIntermHeight } = useContext(StackContext);

  useEffect(() => {
    updateIntermHeight(divRef.current?.clientHeight ?? 0);
  });

  let position = props.position ?? new Position();
  let horizontalPosition = { "left": 0, "center": 50, "right": 100 }[position.horizontal];
  let verticalPosition = { "top": 0, "center": 50, "bottom": 100 }[position.vertical];

  let height = props.height ?? "auto";
  let width = props.width ?? "auto";

  let positionCss = css`
      position:absolute;
      left:${horizontalPosition}%;
      top:${verticalPosition}%;
      transform:translate(-${horizontalPosition}%,-${verticalPosition}%);
      height: ${height};
      width: ${width};
    `;

  return <div ref={divRef} css={positionCss}>{props.children}</div>
}