import { CompositeDecorator } from "draft-js";

// Change LINKS format
const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};
const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a
      style={{ color: "blue", fontStyle: "italic" }}
      href={url}
      target="_blank"
    >
      {props.children}
    </a>
  );
};

const strategyDecorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);

export default strategyDecorator;
