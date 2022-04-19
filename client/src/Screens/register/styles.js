import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  register: {
    height: 'calc(100vh - 65px)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: "url('../Img/login.jpg')",
    justifyContent: 'center',
    objectFit: 'contain',
    backgroundRepeat: 'no-repeat',

  },
  registerWrapper: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '380px',
  },
  registerTitle: {
    fontSize: '3.1rem',
    fontFamily: 'PT Serif, serif',
    color: '#312D2C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerForm: {
    marginTop: '1.2rem',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '2rem'
  },
  label: {
  fontSize: '1.2rem',
},
  registerInput: {
   padding: '1.2rem',
    fontSize: '1rem',
    width: '90%',
    border: 'none',
    borderRadius: '5px',
    '&:focus': {
      outline: 'none',
    },
    boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  },
  registerBtn: {
    padding: '0.7rem',
    marginTop: '1.5rem',
    background: '#2e86de',
    color: '#f4f4f4',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    '&:hover': {
      background: '#54a0ff',
    },
    textTransform: 'uppercase',
  },
  errorShow: {
    color: '#f39c12',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '600'
  },
  registerTextField: {
    
  }
}));
