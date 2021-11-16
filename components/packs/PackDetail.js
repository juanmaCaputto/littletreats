import classes from './PackDetail.module.css';

function PackDetail(props) {
  return (
    <section className={classes.detail}>
      <img
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <p>{props.price}</p>
      <p>{props.description}</p>
    </section>
  );
}

export default PackDetail;
