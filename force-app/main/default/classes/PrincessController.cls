public with sharing class PrincessController {
   @Auraenabled(Cacheable=true)
   public static List<Royal_Member__c> getPrincessDetails(){
    return [SELECT Id, Email__c, Name, Photo__c FROM Royal_Member__c];
   }
}