import React, {FunctionComponent} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useTranslation} from "react-i18next";
import {connect, useDispatch} from "react-redux";
import {toAction} from "./helpers";
import {GlobalErrorDismissedAction, GlobalState, ResultObject, ValidationDetails} from "./GlobalErrorStateReducer";
import {CombinedStates} from "./CombinedStates";

const GeneralErrorDialog:FunctionComponent<{ result: ResultObject, errorOccured: boolean }>
    = ({ result = null, errorOccured = false }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [errorDialogIsOpen, setErrorDialogIsOpen] = React.useState(false);
    if (!result) return null;

    const handleCloseErrorDialog = () => {
        dispatch(toAction(new GlobalErrorDismissedAction()));
        setErrorDialogIsOpen(false);
    };

    if (errorOccured && !errorDialogIsOpen) {
        setErrorDialogIsOpen(true);
    }

    const subtitle = t("globalErrorDialog.Text_" + result.type);

    const unknownMessage = result.type === 'unknown' ? <UnknownMessage subtitle={subtitle} message={result.message}/> : null;
    const validationErrors = result.type === 'validationError' ? <ValidationErrors keys = {result.keys}/> : null;

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

function mapStateToProps(state: CombinedStates): GlobalState {
    const { errorOccured, result, message } = state.globalState;
    return {
        errorOccured,
        result,
        message
    }
}

const UnknownMessage:FunctionComponent<{ subtitle: string, message: string }>
    = ({ subtitle = '', message = '' }) => {
    return(
        <>
            {subtitle}
            <br/>
            {message}
        </>
    )
};

const ValidationErrors:FunctionComponent<{ keys: ValidationDetails[] }>
    = ({ keys = []}) => {
    const items = keys.map(k => <><br/>{k.detail}</>);
    return(
        <>
            {items}
        </>
    )
};

export default connect(mapStateToProps)(GeneralErrorDialog);