import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { useNavigate } from "react-router";

const PostItem = (props) => {
  const navigate = useNavigate();
  const { item } = { ...props };
  const { id, image, title, visitDate, author, detail } = { ...item };

  const handleClick = () => navigate(`/view-post/${id}`);

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <img
          src={image}
          alt="default"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          height={200}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {visitDate}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>

          {detail?.length > 0 && (
            <Typography variant="subtitle1" color="text.secondary">
              {detail}
            </Typography>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PostItem;
