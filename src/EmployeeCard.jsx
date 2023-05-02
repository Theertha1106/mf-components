import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default ({ employee }) =>(
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="194"
        image={employee.image}
        alt={employee.name}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {employee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {employee.role}
        </Typography>
      </CardContent>
    </Card>
);

