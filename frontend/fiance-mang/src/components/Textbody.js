import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard() {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "#4b4e53",
        position: "relative",
        display: "block",
        color: "#fff",
        left: "60%",
        top: "-30%",
      }}
    >
      <CardActionArea>
        <CardContent align="center">
          <Typography gutterBottom variant="h3" component="div">
            شركة النوفلي
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            للحدادة العامة
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "150%" }}>
            عمل معامل الطحين الجملونات الابواب والشبابيك قص وثني الحديد تجارة
            الحديد
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
