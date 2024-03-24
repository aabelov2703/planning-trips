import { ReactNode, useEffect, useState } from "react";
import DoubledTrippleDots from "../ui/svg/doubled-tripple-dots";

export const Draggable: React.FC<any> = (props) => {
  const { children } = props;
  const [elements, setElements] = useState<any>([]);

  useEffect(() => {
    if (Array.isArray(children)) setElements(children);
  }, [children]);

  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [iconHovered, setIconHovered] = useState(false);

  const handleDragStart = (index: number) => {
    if (iconHovered) setDraggedIndex(index);
  };

  const handleDragEnter = (index: number) => {
    if (iconHovered) setDragOverIndex(index);
  };

  const handleDragEnd = () => {
    if (iconHovered && draggedIndex !== null && dragOverIndex !== null) {
      const copy = [...elements];
      const item = copy[draggedIndex];
      copy.splice(draggedIndex, 1);
      copy.splice(dragOverIndex, 0, item);
      setDraggedIndex(null);
      setDragOverIndex(null);
      setElements(copy);
      props.external && props.external();
      props.callBack && props.callBack(copy);
    }
  };

  const handleIconHover = (hovered: boolean) => {
    setIconHovered(hovered);
  };

  const handleDelete = (index: number) => {
    const deleted = elements[index];
    const copy = [...elements];
    copy.splice(index, 1);
    setElements(copy);
    props.external && props.external(deleted);
  };

  return (
    <div id="draggable-container">
      {elements?.map((element: ReactNode, index: number) => {
        const isDragging = index === draggedIndex;
        const isDragOver = index === dragOverIndex;

        return (
          <div
            key={index}
            className={`relative w-full py-2 mt-0 ${
              isDragging ? "opacity-50 " : ""
            } ${
              isDragOver ? "bg-m-color-3" : ""
            } transition-opacity duration-200 ease-in-out border-b-[1px]`}
            draggable={iconHovered}
            onDragStart={() => handleDragStart(index)}
            onDragEnter={() => handleDragEnter(index)}
            onDragEnd={handleDragEnd}
            style={{ cursor: isDragging ? "grabbing" : "" }}
          >
            <div
              className={`absolute top-2 left-0 ${
                iconHovered ? "cursor-move" : ""
              }`}
              onMouseEnter={() => handleIconHover(true)}
              onMouseLeave={() => handleIconHover(false)}
            >
              <DoubledTrippleDots />
            </div>
            {props.deletable && (
              <div
                className="absolute top-4 right-0 hover:cursor-pointer"
                onClick={() => handleDelete(index)}
              ></div>
            )}
            <div className="mx-2 sm:mx-4">{element}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggable;
/***
* Expected:
* props (optional):
  - external: API to save changes at the external environment
  - deletable: get rid of an item from the collection
* children (required, empty array by default) - is an Array of React elements(HTML)
***/
