import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import {connect, useDispatch} from "react-redux";

function GeneralErrorDialog(props) {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [errorDialogIsOpen, setErrorDialogIsOpen] = React.useState(false);
    const { result, errorOccured } = props;

    const handleCloseErrorDialog = () => {
        dispatch({type: 'GLOBAL_ERROR_DISMISSED'});
        setErrorDialogIsOpen(false);
    };

    if (errorOccured && !errorDialogIsOpen) {
        setErrorDialogIsOpen(true);
    }

    const unknownMessage = result.type === 'unknown' ? <UnknownMessage message = {result.message}/> : null;
    const validationErrors = result.type === 'validationError' ? <ValidationErrors errors = {result.keys}/> : null;

    return (
        <Dialog
            open={errorDialogIsOpen}
            onClose={handleCloseErrorDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{t("globalErrorDialog.Title_" + result.type)}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {t("globalErrorDialog.Text_" + result.type)}
                    {unknownMessage}
                    {validationErrors}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseErrorDialog} color="primary">
                    {t("globalErrorDialog.ButtonText")}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

function mapStateToProps(state) {
    const { errorOccured, result } = state.globalState;
    return {
        errorOccured,
        result
    }
}

function UnknownMessage(props) {
    return(
        <>
            <br/>
            {props.message}
        </>
    )
}

function ValidationErrors(props) {
    const { keys } = props;
    const items = keys.map(k => <il>{k}</il>);
    return(
        <>
            <br/>
            <ul>
                {items}
            </ul>
        </>
    )
}

export default connect(mapStateToProps)(GeneralErrorDialog);