import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://user-images.githubusercontent.com/58231568/162637585-e411d39f-dfea-46ab-8237-9702ccbbb688.jpg"
            class="pr-4 pb-3 img-fluid"
            alt="Mbongeni Ngwenya"
          />
          <h4>
            For further questions please contact me using the details below.
          </h4>
          <hr className="hr-light w-25" />
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:mbongeni.ngwenya99@gmail.com">
            <MDBIcon icon="envelope" /> mbongeni.ngwenya99@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo; 
