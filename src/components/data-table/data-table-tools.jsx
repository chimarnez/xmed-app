import { TextField, Box, Button, Grid } from "@mui/material";

import {
  Edit,
  Search as SearchIcon,
  Add as AddIcon,
  Delete,
} from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";

const DataTableTools = ({
  editDisabled,
  allowCreate,
  allowEdit,
  allowDelete,
  deleteDisabled,
  onEdit,
  searchLabel = "Buscar",
  createLabel = "Crear",
}) => {
  //   const navigate = useNavigate();
  return (
    <Grid sx={{ mt: 1 }} container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <TextField
            fullWidth
            size="small"
            id="search-client"
            label={searchLabel}
            variant="outlined"
          />
          <SearchIcon
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translate(-50%, 20%)",
              color: "action.active",
              mr: 1,
              my: 0.5,
            }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {allowCreate && (
            <>
              <Button
                sx={{
                  // marginLeft: 1,
                  marginY: { xs: 1, sm: 0 },
                }}
                variant="outlined"
                startIcon={<AddIcon />}
                // onClick={() => navigate("new")}
              >
                {createLabel}
              </Button>
              <Box sx={{ display: "inline", ml: 1 }} />
            </>
          )}
          {allowEdit && (
            <>
              <Button
                disabled={editDisabled}
                size="large"
                onClick={onEdit}
                //   onClick={() => setOpen(true)}
              >
                <Edit />
              </Button>
              <Box sx={{ display: "inline", ml: 1 }} />
            </>
          )}
          {allowDelete && (
            <Button
              disabled={deleteDisabled}
              //   onClick={() => setOpen(true)}
            >
              <Delete />
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DataTableTools;
