import React, { Component } from "react";
import { Button } from "react-materialize";
import Modal from "react-modal";

export class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = { openModal: false };
  }

  render() {
    const {
      showTriggerButton = true,
      buttonIcon = null,
      headerTitle = "Modal Header",
      buttonTooltip = null,
      buttonName,
      handleClose,
      handleShow,
      children,
      className = "",
      disabled = false,
      btnStyle = {},
      modalStyle = {
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      },
      fixedFooter = false,
      actions = [],
    } = this.props;

    const { openModal } = this.state;
    return (
      <div>
        <Button
          tooltip={buttonTooltip}
          node="button"
          className={className}
          disabled={disabled}
          style={btnStyle}
          onClick={(e) => this.setState({ openModal: true })}
        >
          {buttonName} {buttonIcon}
        </Button>
        <Modal
          isOpen={openModal}
          onAfterOpen={handleShow}
          onRequestClose={handleClose}
          style={modalStyle}
          contentLabel={headerTitle ? headerTitle : "Modal"}
        >
          <div>
            <button onClick={() => this.setState({ openModal: false })}>
              close
            </button>
            {children}
          </div>
        </Modal>
      </div>
    );
  }
}
