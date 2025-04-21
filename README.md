# RIBBON PROJECT NOTES

Only these tabs are needed from the original menu
- Accounting - tabAccounting
- Cost Accounting - tabCA
- Customer Service - tabCustomerService
- Financial - tabFinancial
- Inventory - tabInventory
- Manufacturing - tabManufacturing
- MRP II - tabMrpII
- Production - tabProduction
- Sales Analysis - tabSalesAnalysis
- Control - tabControl


#### Please see the "Original Menu Files" folder


There are a couple of important comboBoxes that modifiy the fuction of a button.

For example in the group "A/P Reporting" of the tab "Accounting". The buttons "Ageing" and "Clearing" use a combobox.
Line 25 in Mrpplus.xml

```xml 
<group id="grpAP2" label="A/P Reporting">
<dropDown id="ddAP1" showLabel="true" label="Select" getSelectedItemIndex="CallbackDDGetSelectedItemIndex" onAction="CallbackDropDownOnAction">
<item id="itmDD1" label="As Of"/>
<item id="itmDD2" label="Current"/>
</dropDown>
<button id="button_ApAgeing" label="Ageing" onAction="CallOnAction" imageMso="FilePrint" tag="AP_Ageing" getScreentip="GetScreentip" getSupertip="GetSupertip"/>
<button id="button_Clearing" label="Clearing" onAction="CallOnAction" imageMso="FilePrint" tag="AP_Clearing" getScreentip="GetScreentip" getSupertip="GetSupertip"/>
<separator id="APSeparator2"/>```

Selecting one of these from the combobox
```
<item id="itmDD1" label="As Of"/>
<item id="itmDD2" label="Current"/>```
```
tag="AP_Ageing" <!-- is the form/screen to call. Please have buttons call this is some manner that can be changed later -->```
```
imageMso="FilePrint" <!-- this is an icon hint. matching these exactly is not important so much.```

```xml
<separator id="APSeparator2"/>   <!--- not needed as groups have a sperarator already -->```

```
 getScreentip="GetScreentip" getSupertip="GetSupertip"   <!--- not needed -->```






-- notes
Typical setup

ribbon
  ribbon-tabs
    ribbon-tab .(header is name / label)
      ribbon-groups
        ribbon-group (header is name / label)
          ribbon-collections
            ribbon-collection
              ribbon-items
                ribbon-item type="Button" :buttonSettings="json-settings"  (:allowedSizes="smallSize, mediumSize, largeSize")
                  -or-
                ribbon-item type="SplitButton (dropdown):allowedSizes="largeSize"  :splitButtonSettings="json-settings"
                  -or-
                ribbon-item type="DropDown" :dropDownSettings="json-settings"

###End
