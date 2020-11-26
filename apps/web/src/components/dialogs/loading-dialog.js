import React, { useEffect } from "react";
import { Box, Text } from "rebass";
import Dialog, { showDialog } from "./dialog";
import * as Icon from "../icons";

function LoadingDialog(props) {
  useEffect(() => {
    (async function () {
      await props.action();
      props.onDone();
    })();
  }, [props]);

  return (
    <Dialog
      isOpen={true}
      title={props.title}
      description={props.subtitle}
      onClose={() => {}}
    >
      <Box>
        <Text as="span" variant="body">
          {props.message}
        </Text>
        <Icon.Loading rotate sx={{ mt: 2 }} color="primary" />
      </Box>
    </Dialog>
  );
}

export function showLoadingDialog(dialogData) {
  const { title, message, subtitle, action } = dialogData;
  return showDialog((perform) => (
    <LoadingDialog
      title={title}
      subtitle={subtitle}
      message={message}
      action={action}
      onDone={() => perform(true)}
    />
  ));
}
