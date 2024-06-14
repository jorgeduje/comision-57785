import { Grid, Typography } from "@mui/material";
import { styles } from "./estilos";

const ProbandoResponsive = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" color={"primary"}>
            Caja 1
          </Typography>
          <Typography variant="h6" color={"primary.otro"}>
            Caja 1
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={styles.cajaDos}>
            Caja 2
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" sx={{ backgroundColor: "green" }}>
            Caja 3
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProbandoResponsive;
