<template>
    <section class="form-gradient">
      <mdb-row>
        <mdb-col md="5">
          <mdb-card>
            <div class="header pt-3 peach-gradient">
              <mdb-row class="d-flex justify-content-center">
                <h3 class="white-text mb-3 pt-3 font-weight-bold">Log in</h3>
              </mdb-row>
              <mdb-row class="mt-2 mb-3 d-flex justify-content-center">
                <a class="fa-lg p-2 m-2 fb-ic"><mdb-icon class="fab fa-facebook white-text fa-lg"/></a>
                <a class="fa-lg p-2 m-2 tw-ic"><mdb-icon class="fab fa-twitter white-text fa-lg"/></a>
                <a class="fa-lg p-2 m-2 gplus-ic"><mdb-icon class="fab fa-google-plus white-text fa-lg"/></a>
              </mdb-row>
            </div>
            <mdb-card-body class="mx-4 mt-4">
              <mdb-input label="Your email" type="text"/>
              <mdb-input label="Your password" type="password" containerClass="mb-0"/>
              <p class="font-small grey-text d-flex justify-content-end">Forgot <a href="#" class="dark-grey-text ml-1 font-weight-bold"> Password?</a></p>
              <mdb-row class="d-flex align-items-center mb-4 mt-5">
                <mdb-col md="5" class="d-flex align-items-start">
                  <div class="text-center">
                    <mdb-btn color="grey" rounded type="button" class="z-depth-1a">Log in</mdb-btn>
                  </div>
                </mdb-col>
                <mdb-col md="7" class="d-flex justify-content-end">
                  <p class="font-small grey-text mt-3">Don't have an account? <a href="#" class="dark-grey-text ml-1 font-weight-bold"> Sign up</a></p>
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
</template>
<script>
  import { mdbRow, mdbCol, mdbCard, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue';
  export default {
    name: 'FormsPage',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    }
  }
</script>
<style>
  .form-gradient .font-small {
    font-size: 0.8rem; }

  .form-gradient .header {
    border-top-left-radius: .3rem;
    border-top-right-radius: .3rem; }

  .form-gradient input[type=text]:focus:not([readonly]) {
    border-bottom: 1px solid #fd9267;
    -webkit-box-shadow: 0 1px 0 0 #fd9267;
    box-shadow: 0 1px 0 0 #fd9267; }

  .form-gradient input[type=text]:focus:not([readonly]) + label {
    color: #4f4f4f; }

  .form-gradient input[type=password]:focus:not([readonly]) {
    border-bottom: 1px solid #fd9267;
    -webkit-box-shadow: 0 1px 0 0 #fd9267;
    box-shadow: 0 1px 0 0 #fd9267; }

  .form-gradient input[type=password]:focus:not([readonly]) + label {
    color: #4f4f4f; }

</style>