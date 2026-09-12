import { LightningElement , wire} from 'lwc';
import {subscribe, unsubscribe, MessageContext} from 'lightning/messageService';
import PRINCESS_DETAILS from '@salesforce/messageChannel/princessDetails__c';

export default class DisplayPrincessDetails extends LightningElement {
    princessPortrait;
    selectedprincessInfo;
    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        console.log('Subscribed to the channel Successfully')
        subscribe(this.messageContext , PRINCESS_DETAILS , (message)=>{
            this.selectedprincessInfo = message.detail.princessDetails;
        });
        console.log(this.selectedprincessInfo);
    }

    princessPotriat(str){
        this.princessPortrait =str.replaceAll('amp;' , '');
        console.log(this.princessPortrait);
    }
}