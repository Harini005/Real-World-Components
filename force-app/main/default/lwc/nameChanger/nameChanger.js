import { LightningElement } from 'lwc';
import lightningToast from 'lightning/toast';

export default class NameChanger extends LightningElement {
    userObj = {
        name: 'Princess Diana',
        email: 'diana@royalcourt.com',
        designation: 'Princess',
        category: 'Royal'
    }

    readMode = true;

    editButtonHandler(event) {
        this.readMode = false;
    }


    saveHandler(event) {
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        if (!(name || email)) {
            lightningToast.show({
                label: 'Missing Details',
                message: 'OOPS!!! No details were added, please check',
                variant: 'Error',
                mode: 'dismissible'
            }, this);
        }
        else {
            lightningToast.show({
                label: 'Notified Royal Admin',
                message: 'Royal Court Admin will reach out to validate the details',
                variant: 'SUCCESS',
                mode: 'Sticky'
            }, this);

            window.setTimeout(() => {
                this.readMode = true;
            }, 2000);
        }

       
    }


}