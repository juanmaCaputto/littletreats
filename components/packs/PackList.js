import classes from './packList.module.css';
import Pack from '../Meals/MealItem/Pack';

function packList(props) {
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

export default packList;