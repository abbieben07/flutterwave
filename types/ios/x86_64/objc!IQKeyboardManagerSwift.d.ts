
declare const enum IQAutoToolbarManageBehaviour {

	BySubviews = 0,

	ByTag = 1,

	ByPosition = 2
}

declare class IQBarButtonItem extends UIBarButtonItem {

	static alloc(): IQBarButtonItem; // inherited from NSObject

	static appearance(): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQBarButtonItem; // inherited from UIAppearance

	static fixedSpaceItemOfWidth(width: number): IQBarButtonItem; // inherited from UIBarButtonItem

	static flexibleSpaceItem(): IQBarButtonItem; // inherited from UIBarButtonItem

	static new(): IQBarButtonItem; // inherited from NSObject

	invocation: IQInvocation;

	setTargetAction(target: any, action: string): void;
}

declare class IQBarButtonItemConfiguration extends NSObject {

	static alloc(): IQBarButtonItemConfiguration; // inherited from NSObject

	static new(): IQBarButtonItemConfiguration; // inherited from NSObject

	readonly action: string;

	readonly image: UIImage;

	readonly title: string;

	constructor(o: { barButtonSystemItem: UIBarButtonSystemItem; action: string; });

	constructor(o: { image: UIImage; action: string; });

	constructor(o: { title: string; action: string; });

	initWithBarButtonSystemItemAction(barButtonSystemItem: UIBarButtonSystemItem, action: string): this;

	initWithImageAction(image: UIImage, action: string): this;

	initWithTitleAction(title: string, action: string): this;
}

declare const enum IQEnableMode {

	Default = 0,

	Enabled = 1,

	Disabled = 2
}

declare class IQInvocation extends NSObject {

	static alloc(): IQInvocation; // inherited from NSObject

	static new(): IQInvocation; // inherited from NSObject

	action: string;

	target: any;

	constructor();

	init(target: any, action: string): this;

	invokeFrom(from: any): void;
}

declare class IQKeyboardManager extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): IQKeyboardManager; // inherited from NSObject

	static new(): IQKeyboardManager; // inherited from NSObject

	readonly canGoNext: boolean;

	readonly canGoPrevious: boolean;

	disabledDistanceHandlingClasses: NSArray<typeof NSObject>;

	disabledToolbarClasses: NSArray<typeof NSObject>;

	disabledTouchResignedClasses: NSArray<typeof NSObject>;

	enable: boolean;

	enableAutoToolbar: boolean;

	enableDebugging: boolean;

	enabledDistanceHandlingClasses: NSArray<typeof NSObject>;

	enabledToolbarClasses: NSArray<typeof NSObject>;

	enabledTouchResignedClasses: NSArray<typeof NSObject>;

	keyboardAppearance: UIKeyboardAppearance;

	keyboardDistanceFromTextField: number;

	readonly keyboardShowing: boolean;

	layoutIfNeededOnUpdate: boolean;

	readonly movedDistance: number;

	movedDistanceChanged: (p1: number) => void;

	overrideKeyboardAppearance: boolean;

	placeholderButtonColor: UIColor;

	placeholderColor: UIColor;

	placeholderFont: UIFont;

	previousNextDisplayMode: IQPreviousNextDisplayMode;

	resignFirstResponderGesture: UITapGestureRecognizer;

	shouldPlayInputClicks: boolean;

	shouldResignOnTouchOutside: boolean;

	shouldShowToolbarPlaceholder: boolean;

	shouldToolbarUsesTextFieldTintColor: boolean;

	toolbarBarTintColor: UIColor;

	toolbarDoneBarButtonItemAccessibilityLabel: string;

	toolbarDoneBarButtonItemImage: UIImage;

	toolbarDoneBarButtonItemText: string;

	toolbarManageBehaviour: IQAutoToolbarManageBehaviour;

	toolbarNextBarButtonItemAccessibilityLabel: string;

	toolbarNextBarButtonItemImage: UIImage;

	toolbarNextBarButtonItemText: string;

	toolbarPreviousBarButtonItemAccessibilityLabel: string;

	toolbarPreviousBarButtonItemImage: UIImage;

	toolbarPreviousBarButtonItemText: string;

	toolbarPreviousNextAllowedClasses: NSArray<typeof NSObject>;

	toolbarTintColor: UIColor;

	touchResignedGestureIgnoreClasses: NSArray<typeof NSObject>;

	static readonly shared: IQKeyboardManager;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceiveEvent(gestureRecognizer: UIGestureRecognizer, event: _UIEvent): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	goNext(): boolean;

	goPrevious(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerAllNotifications(): void;

	registerTextFieldViewClassDidBeginEditingNotificationNameDidEndEditingNotificationName(aClass: typeof NSObject, didBeginEditingNotificationName: string, didEndEditingNotificationName: string): void;

	reloadInputViews(): void;

	reloadLayoutIfNeeded(): void;

	resignFirstResponder(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	unregisterAllNotifications(): void;

	unregisterTextFieldViewClassDidBeginEditingNotificationNameDidEndEditingNotificationName(aClass: typeof NSObject, didBeginEditingNotificationName: string, didEndEditingNotificationName: string): void;
}

declare var IQKeyboardManagerSwiftVersionNumber: number;

declare var IQKeyboardManagerSwiftVersionString: interop.Reference<number>;

declare class IQKeyboardReturnKeyHandler extends NSObject implements UITextFieldDelegate, UITextViewDelegate {

	static alloc(): IQKeyboardReturnKeyHandler; // inherited from NSObject

	static new(): IQKeyboardReturnKeyHandler; // inherited from NSObject

	delegate: any;

	lastTextFieldReturnKeyType: UIReturnKeyType;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { controller: UIViewController; });

	addResponderFromView(view: UIView): void;

	addTextFieldView(view: UIView): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithController(controller: UIViewController): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeResponderFromView(view: UIView): void;

	removeTextFieldView(view: UIView): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

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

	textViewDidBeginEditing(textView: UITextView): void;

	textViewDidChange(textView: UITextView): void;

	textViewDidChangeSelection(textView: UITextView): void;

	textViewDidEndEditing(textView: UITextView): void;

	textViewShouldBeginEditing(textView: UITextView): boolean;

	textViewShouldChangeTextInRangeReplacementText(textView: UITextView, range: NSRange, text: string): boolean;

	textViewShouldEndEditing(textView: UITextView): boolean;

	textViewShouldInteractWithTextAttachmentInRange(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange): boolean;

	textViewShouldInteractWithTextAttachmentInRangeInteraction(textView: UITextView, textAttachment: NSTextAttachment, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	textViewShouldInteractWithURLInRange(textView: UITextView, URL: NSURL, characterRange: NSRange): boolean;

	textViewShouldInteractWithURLInRangeInteraction(textView: UITextView, URL: NSURL, characterRange: NSRange, interaction: UITextItemInteraction): boolean;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum IQPreviousNextDisplayMode {

	Default = 0,

	AlwaysHide = 1,

	AlwaysShow = 2
}

declare class IQPreviousNextView extends UIView {

	static alloc(): IQPreviousNextView; // inherited from NSObject

	static appearance(): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQPreviousNextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQPreviousNextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQPreviousNextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQPreviousNextView; // inherited from UIAppearance

	static new(): IQPreviousNextView; // inherited from NSObject
}

declare class IQTextView extends UITextView {

	static alloc(): IQTextView; // inherited from NSObject

	static appearance(): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQTextView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTextView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQTextView; // inherited from UIAppearance

	static new(): IQTextView; // inherited from NSObject

	placeholder: string;

	placeholderTextColor: UIColor;
}

declare class IQTitleBarButtonItem extends IQBarButtonItem {

	static alloc(): IQTitleBarButtonItem; // inherited from NSObject

	static appearance(): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQTitleBarButtonItem; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQTitleBarButtonItem; // inherited from UIAppearance

	static fixedSpaceItemOfWidth(width: number): IQTitleBarButtonItem; // inherited from UIBarButtonItem

	static flexibleSpaceItem(): IQTitleBarButtonItem; // inherited from UIBarButtonItem

	static new(): IQTitleBarButtonItem; // inherited from NSObject

	selectableTitleColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	constructor(o: { title: string; });

	initWithTitle(title: string): this;
}

declare class IQToolbar extends UIToolbar implements UIInputViewAudioFeedback {

	static alloc(): IQToolbar; // inherited from NSObject

	static appearance(): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): IQToolbar; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQToolbar; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): IQToolbar; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): IQToolbar; // inherited from UIAppearance

	static new(): IQToolbar; // inherited from NSObject

	doneBarButton: IQBarButtonItem;

	fixedSpaceBarButton: IQBarButtonItem;

	nextBarButton: IQBarButtonItem;

	previousBarButton: IQBarButtonItem;

	titleBarButton: IQTitleBarButtonItem;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly enableInputClicksWhenVisible: boolean; // inherited from UIInputViewAudioFeedback

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
