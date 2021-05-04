import React, { Component } from "react";
import { Modal, Button } from "react-materialize";

export class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      showTriggerButton = true,
      buttonIcon = null,
      show,
      headerTitle = "Modal Header",
      buttonTooltip = null,
      buttonName,
      handleClose,
      handleShow,
      children,
      className = "",
      disabled = false,
      btnStyle = {},
      modalStyle = {},
      fixedFooter = false,
      actions = [],
    } = this.props;
    return (
      <Modal
        actions={actions}
        bottomSheet={false}
        fixedFooter={fixedFooter}
        header={headerTitle}
        id="Modal-0"
        open={show}
        style={modalStyle}
        options={{
          dismissible: true,
          endingTop: "10%",
          inDuration: 250,
          onCloseEnd: handleClose,
          onCloseStart: null,
          onOpenEnd: handleShow,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: false,
          startingTop: "4%",
        }}
        trigger={
          showTriggerButton && (
            <Button
              tooltip={buttonTooltip}
              node="button"
              className={className}
              disabled={disabled}
              style={btnStyle}
            >
              {buttonName} {buttonIcon}
            </Button>
          )
        }
      >
        {children}
      </Modal>
    );
  }
}
