import { LightningElement , wire} from 'lwc';
import lightningToast from 'lightning/toast';
import getPrincessDetails from '@salesforce/apex/PrincessController.getPrincessDetails';
import {publish, MessageContext} from 'lightning/messageService';
import PRINCESS_DETAILS from '@salesforce/messageChannel/princessDetails__c';


export default class ListPrincess extends LightningElement {
    @wire(MessageContext)
    messageContext;

    listAvailable = false;
    princess = [];
    princessMap = new Map();

    @wire(getPrincessDetails)
    princessDetails({data, error}){
        if(data){
            this.princess = data;
            this.listAvailable = true;

            for(let mem of data){
                this.princessMap.set(mem.Id , mem);
            }

            console.log(this.princessMap)
        }
        if(error){
            lightningToast.show({
                label : 'Error Occurred',
                message : 'Notified Error Details to Royal Admin',
                variant : 'Error'
            }, this);
        }

    }

    capturePrincessSelected(event){
        let payload = {
            detail : {
                princessDetails : this.princessMap.get(event.target.dataset.princessId)
            }
        }

        publish(this.messageContext , PRINCESS_DETAILS , payload);
        console.log('Published Successfully');
    }


}