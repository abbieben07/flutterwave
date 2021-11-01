
declare class BaseViewController extends UITableViewController {

	static alloc(): BaseViewController; // inherited from NSObject

	static new(): BaseViewController; // inherited from NSObject
}

declare class FlutterwavePayViewController extends BaseViewController implements UIPickerViewDataSource, UIPickerViewDelegate, UITextFieldDelegate {

	static alloc(): FlutterwavePayViewController; // inherited from NSObject

	static new(): FlutterwavePayViewController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfComponentsInPickerView(pickerView: UIPickerView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	pickerViewAttributedTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): NSAttributedString;

	pickerViewDidSelectRowInComponent(pickerView: UIPickerView, row: number, component: number): void;

	pickerViewNumberOfRowsInComponent(pickerView: UIPickerView, component: number): number;

	pickerViewRowHeightForComponent(pickerView: UIPickerView, component: number): number;

	pickerViewTitleForRowForComponent(pickerView: UIPickerView, row: number, component: number): string;

	pickerViewViewForRowForComponentReusingView(pickerView: UIPickerView, row: number, component: number, view: UIView): UIView;

	pickerViewWidthForComponent(pickerView: UIPickerView, component: number): number;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	textFieldDidBeginEditing(textField: UITextField): void;

	textFieldDidChangeSelection(textField: UITextField): void;

	textFieldDidEndEditing(textField: UITextField): void;

	textFieldDidEndEditingReason(textField: UITextField, reason: UITextFieldDidEndEditingReason): void;

	textFieldShouldBeginEditing(textField: UITextField): boolean;

	textFieldShouldChangeCharactersInRangeReplacementString(textField: UITextField, range: NSRange, string: string): boolean;

	textFieldShouldClear(textField: UITextField): boolean;

	textFieldShouldEndEditing(textField: UITextField): boolean;

	textFieldShouldReturn(textField: UITextField): boolean;
}

declare var FlutterwaveSDKVersionNumber: number;

declare var FlutterwaveSDKVersionString: interop.Reference<number>;

declare class VSTextField extends UITextField {

	static alloc(): VSTextField; // inherited from NSObject

	static appearance(): VSTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): VSTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): VSTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): VSTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): VSTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): VSTextField; // inherited from UIAppearance

	static new(): VSTextField; // inherited from NSObject

	textDidChange(): void;
}
