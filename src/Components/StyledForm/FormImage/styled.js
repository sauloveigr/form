import styled from "styled-components";
import Laptop from "../../../assets/images/Laptop.svg";
import ProgrammingPic from "../../../assets/images/programming.svg";
import LogoImg from "../../../assets/images/logo-taghos.png";

const FormImage = styled.div`
   width: 31.25rem;
   height: 100%;

   @media (max-width: 1100px) {
      display: none;
   }
`;

export const Image = styled.img.attrs({ src: Laptop })`
   margin-top: 6.25rem;
   width: 9.375rem;
`;

export const Programming = styled.img.attrs({ src: ProgrammingPic })`
   width: 18.75rem;
   position: absolute;
   bottom: 0.625rem;

   @media (max-width: 420px) {
      width: 15rem;
   }

   @media (max-width: 375px) {
      width: 13rem;
   }

   @media (max-height: 768px) {
      display: none;
   }
`;

export const ImageWrapper = styled.div`
   margin-top: 3.125rem;
   display: flex;
   width: 100%;
   justify-content: center;
`;

export const Logo = styled.img.attrs({ src: LogoImg })``;

export default FormImage;
