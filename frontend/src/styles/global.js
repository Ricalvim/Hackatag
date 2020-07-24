import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;800&display=swap');

  :root{
    --box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    --primary-color: #f0ad4e;
    --success-color: #24aa98;
    --success-color-dark: #217f72;
    --error-color: #cf6565;
    --dark-color: #373A3F;
  }

  *{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif !important;
  }

  h1, h2, h3, h4, h5, h6{
    &.ant-typography{
      font-weight: normal;
      color: #333;
    }
  }

  .container{
    max-width: 1000px;
    margin: auto;
    padding: 0 15px;
  }

  .align-center{
    text-align: center;
  }

  .primary{
    color: var(--primary-color) !important;
  }

  .success{
    color: var(--success-color);
  }

  .error{
    color: var(--error-color);
  }

  .bkg-success{
    background-color: var(--success-color);
    color: #fff;
    border:0;
    &:hover, &:focus{
      background-color: var(--success-color-dark);
      color: #fff;
    }
  }

  .link{
    transition: .2s;
    &:hover{
      opacity: .5;
      cursor: pointer;
    }
  }

  .bkg-success-gradient{
    color: #fff;
    background: linear-gradient(var(--success-color), var(--success-color-dark));
  }

  .btn-blue{
    background-color: #378dcc;
    color: #fff;
    border: 0;

    &:hover, &:focus{
      background-color: #2f78ad;
      color: #fff;
      border: 0;
    }
  }

  .bkg-light{
    background-color: #eee;
  }

  .padding-y{
    padding-top: 25px;
    padding-bottom: 25px;
  }
  
  .ant-card{
    height: 100%;
  }

  .card-icon{
    display: flex;
    align-items: center;
    font-size: 20px;
    transition: .5s;
    span{
      color: #fff;
    }

    .icon{
      font-size: 28px;
      margin-right: 16px;
      border: 3px solid #fff;
      padding: 10px;
      border-radius: 50%;
    }

    &:hover{
      opacity: .7;
    }
  }

  .capitalize{
    text-transform: capitalize;
  }

  .carousel .slide{
    background: #fff;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #333;
  }
  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #333;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: rgba(0,0,0,0);
  }

  .inputmask{
    width: 100%;
    border: 1px solid #d9d9d9;
    padding: 4px 11px;
    border-radius: 2px;
    transition: all 0.3s;
    
    &:focus{
      border-color: #7385ff;
      box-shadow: 0 0 0 2px rgba(73, 90, 255, 0.2);
      border-right-width: 1px !important;
      outline: 0;
    }
  }

  .steps{
    background: #f7f7f7;
    border-top: 1px solid #e5e5e5;
    padding: 20px 0;
    color: #b0b0b0;
    font-size: 16px;
    >div{
      max-width: 700px;
    }
  }

  .ant-steps-item-process .ant-steps-item-icon {
    background: #101010;
    border-color: #101010;
    /* background: var(--success-color);
    border-color: var(--success-color); */
  }

  .ant-steps-item-finish .ant-steps-item-icon {
    background: var(--success-color);
    border-color: var(--success-color);
    color: var(--success-color);
  }

  .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: #fff;
  }

  .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title::after {
   display: none;
  }

  .ant-table-thead > tr > th{
    background-color: #373b3f;
    color: #fff;
    text-transform: uppercase;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .ant-table-thead th.ant-table-column-sort, 
  .ant-table-thead th.ant-table-column-has-sorters:hover{
    background-color: #373b3f;
    color: #fff;
  }

  

  .countdown{
    position: relative;
    canvas{
      filter: blur(7px);
      display: relative;
    }

    .overlay{
      position: absolute;
      top: 0;
      left: 0;
      right:0;
      width: 170px;
      height: 100%;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 3px;
      .ant-typography{
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        background-color: var(--success-color);
        padding: 5px;
        border-radius: 2px;
      }  
    }
  }

`;
