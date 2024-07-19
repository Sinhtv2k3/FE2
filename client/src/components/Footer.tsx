import { Box, Container, Grid, Link, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        bgcolor: "#333",
        color: "#fff",
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="space-between">
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Tên Công Ty
            </Typography>
            <Typography variant="body2" component="p">
              Mô tả ngắn gọn về công ty của bạn và những gì nó làm.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Liên Kết
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Link href="#" color="inherit">
                  Trang Chủ
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Sản Phẩm
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Về Chúng Tôi
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color="inherit">
                  Liên Hệ
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box mt={3}>
          <Typography variant="body2" color="inherit">
            &copy; {new Date().getFullYear()} Tên Công Ty. Mọi quyền được bảo lưu.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
