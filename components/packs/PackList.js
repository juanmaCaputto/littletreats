import classes from "./PackList.module.css";
import Pack from "./Pack";

function PackList(props) {
  return (
    <ul className={classes.list}>
      {props.packs.map((pack) => (
        <Pack
          key={pack.id}
          id={pack.id}
          image={pack.image}
          title={pack.title}
          price={pack.price}
          description={pack.description}
        />
      ))}
    </ul>
  );
}

export default PackList;
