import React from "react";
import "./Accordian.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import LanguageIcon from "@material-ui/icons/Language";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    float: "left",
    width: "33.3%",
  },
}));

const Accordian = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Lorem Ipsum</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.container}>
          <div>
            <div className="header">
              <SettingsIcon color="primary" />
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
          </div>
        </AccordionDetails>
        <AccordionDetails className={classes.container}>
          <div>
            <div className="header">
              <LanguageIcon color="primary" />
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
          </div>
        </AccordionDetails>
        <AccordionDetails className={classes.container}>
          <div>
            <div className="header">
              <LibraryBooksIcon color="primary" />
              <h4>Lorem ipsum dolor sit amet.</h4>
            </div>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
            <button className="subTitle">
              <CheckCircleOutlineIcon />
              <span>
                Lorem Ipsum is simply dummy text <br />
                <span className="smallTitle">
                  Lorem Ipsum is simply dummy text
                </span>
              </span>
            </button>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordian;
