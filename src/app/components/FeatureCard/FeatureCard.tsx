import classes from "./FeatureCard.module.css";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className={classes.container}>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
