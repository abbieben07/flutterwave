
declare const enum MDCAnimationTimingFunction {

	Standard = 0,

	Deceleration = 1,

	Acceleration = 2,

	Sharp = 3,

	EaseInOut = 0,

	EaseOut = 1,

	EaseIn = 2,

	Translate = 0,

	TranslateOnScreen = 1,

	TranslateOffScreen = 2,

	FadeIn = 1,

	FadeOut = 2
}

declare class MDCBaseTextArea extends UIControl implements UIContentSizeCategoryAdjusting {

	static alloc(): MDCBaseTextArea; // inherited from NSObject

	static appearance(): MDCBaseTextArea; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCBaseTextArea; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCBaseTextArea; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCBaseTextArea; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCBaseTextArea; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCBaseTextArea; // inherited from UIAppearance

	static new(): MDCBaseTextArea; // inherited from NSObject

	baseTextAreaDelegate: MDCBaseTextAreaDelegate;

	containerRadius: number;

	horizontalInterItemSpacingOverride: number;

	readonly label: UILabel;

	labelBehavior: MDCTextControlLabelBehavior;

	readonly leadingAssistiveLabel: UILabel;

	leadingEdgePaddingOverride: number;

	leadingView: UIView;

	leadingViewMode: UITextFieldViewMode;

	maximumNumberOfVisibleRows: number;

	minimumNumberOfVisibleRows: number;

	placeholder: string;

	placeholderColor: UIColor;

	preferredContainerHeight: number;

	readonly textView: UITextView;

	readonly trailingAssistiveLabel: UILabel;

	trailingEdgePaddingOverride: number;

	trailingView: UIView;

	trailingViewMode: UITextFieldViewMode;

	verticalDensity: number;

	adjustsFontForContentSizeCategory: boolean; // inherited from UIContentSizeCategoryAdjusting

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	floatingLabelColorForState(state: MDCTextControlState): UIColor;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	leadingAssistiveLabelColorForState(state: MDCTextControlState): UIColor;

	normalLabelColorForState(state: MDCTextControlState): UIColor;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setFloatingLabelColorForState(floatingLabelColor: UIColor, state: MDCTextControlState): void;

	setLeadingAssistiveLabelColorForState(leadingAssistiveLabelColor: UIColor, state: MDCTextControlState): void;

	setNormalLabelColorForState(normalLabelColor: UIColor, state: MDCTextControlState): void;

	setTextColorForState(textColor: UIColor, state: MDCTextControlState): void;

	setTrailingAssistiveLabelColorForState(trailingAssistiveLabelColor: UIColor, state: MDCTextControlState): void;

	textColorForState(state: MDCTextControlState): UIColor;

	trailingAssistiveLabelColorForState(state: MDCTextControlState): UIColor;
}

interface MDCBaseTextAreaDelegate extends NSObjectProtocol {

	baseTextAreaShouldChangeSize?(baseTextArea: MDCBaseTextArea, newSize: CGSize): void;
}
declare var MDCBaseTextAreaDelegate: {

	prototype: MDCBaseTextAreaDelegate;
};

declare class MDCBaseTextField extends UITextField {

	static alloc(): MDCBaseTextField; // inherited from NSObject

	static appearance(): MDCBaseTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCBaseTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCBaseTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCBaseTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCBaseTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCBaseTextField; // inherited from UIAppearance

	static new(): MDCBaseTextField; // inherited from NSObject

	baseTextFieldDelegate: MDCBaseTextFieldDelegate;

	containerRadius: number;

	horizontalInterItemSpacingOverride: number;

	readonly label: UILabel;

	labelBehavior: MDCTextControlLabelBehavior;

	readonly leadingAssistiveLabel: UILabel;

	leadingEdgePaddingOverride: number;

	leadingView: UIView;

	leadingViewMode: UITextFieldViewMode;

	preferredContainerHeight: number;

	readonly trailingAssistiveLabel: UILabel;

	trailingEdgePaddingOverride: number;

	trailingView: UIView;

	trailingViewMode: UITextFieldViewMode;

	verticalDensity: number;

	floatingLabelColorForState(state: MDCTextControlState): UIColor;

	leadingAssistiveLabelColorForState(state: MDCTextControlState): UIColor;

	normalLabelColorForState(state: MDCTextControlState): UIColor;

	setFloatingLabelColorForState(floatingLabelColor: UIColor, state: MDCTextControlState): void;

	setLeadingAssistiveLabelColorForState(leadingAssistiveLabelColor: UIColor, state: MDCTextControlState): void;

	setNormalLabelColorForState(normalLabelColor: UIColor, state: MDCTextControlState): void;

	setTextColorForState(textColor: UIColor, state: MDCTextControlState): void;

	setTrailingAssistiveLabelColorForState(trailingAssistiveLabelColor: UIColor, state: MDCTextControlState): void;

	textColorForState(state: MDCTextControlState): UIColor;

	trailingAssistiveLabelColorForState(state: MDCTextControlState): UIColor;
}

interface MDCBaseTextFieldDelegate extends NSObjectProtocol {

	baseTextFieldDidDeleteBackward?(textField: MDCBaseTextField): void;

	baseTextFieldDidUpdateIntrinsicHeight?(textField: MDCBaseTextField, height: number): void;

	baseTextFieldShouldDeleteBackward?(textField: MDCBaseTextField): boolean;

	baseTextFieldShouldPerformActionWithSenderCanPerformAction?(textField: MDCBaseTextField, action: string, sender: any, canPerformAction: boolean): boolean;
}
declare var MDCBaseTextFieldDelegate: {

	prototype: MDCBaseTextFieldDelegate;
};

declare class MDCBaseTextFieldLayout extends NSObject {

	static alloc(): MDCBaseTextFieldLayout; // inherited from NSObject

	static new(): MDCBaseTextFieldLayout; // inherited from NSObject

	assistiveLabelViewFrame: CGRect;

	assistiveLabelViewLayout: MDCTextControlAssistiveLabelViewLayout;

	readonly calculatedHeight: number;

	clearButtonFrame: CGRect;

	containerHeight: number;

	displaysLeadingView: boolean;

	displaysTrailingView: boolean;

	labelFrameFloating: CGRect;

	labelFrameNormal: CGRect;

	labelTruncationIsPresent: boolean;

	leadingViewFrame: CGRect;

	textRectFloating: CGRect;

	textRectNormal: CGRect;

	trailingViewFrame: CGRect;

	constructor(o: { textFieldSize: CGSize; positioningReference: MDCTextControlVerticalPositioningReference; horizontalPositioningReference: MDCTextControlHorizontalPositioning; text: string; font: UIFont; floatingFont: UIFont; label: UILabel; labelPosition: MDCTextControlLabelPosition; labelBehavior: MDCTextControlLabelBehavior; sideViewAlignment: MDCTextControlTextFieldSideViewAlignment; leadingView: UIView; leadingViewMode: UITextFieldViewMode; trailingView: UIView; trailingViewMode: UITextFieldViewMode; clearButtonSideLength: number; clearButtonMode: UITextFieldViewMode; leadingAssistiveLabel: UILabel; trailingAssistiveLabel: UILabel; assistiveLabelDrawPriority: MDCTextControlAssistiveLabelDrawPriority; customAssistiveLabelDrawPriority: number; isRTL: boolean; isEditing: boolean; });

	initWithTextFieldSizePositioningReferenceHorizontalPositioningReferenceTextFontFloatingFontLabelLabelPositionLabelBehaviorSideViewAlignmentLeadingViewLeadingViewModeTrailingViewTrailingViewModeClearButtonSideLengthClearButtonModeLeadingAssistiveLabelTrailingAssistiveLabelAssistiveLabelDrawPriorityCustomAssistiveLabelDrawPriorityIsRTLIsEditing(textFieldSize: CGSize, positioningReference: MDCTextControlVerticalPositioningReference, horizontalPositioningReference: MDCTextControlHorizontalPositioning, text: string, font: UIFont, floatingFont: UIFont, label: UILabel, labelPosition: MDCTextControlLabelPosition, labelBehavior: MDCTextControlLabelBehavior, sideViewAlignment: MDCTextControlTextFieldSideViewAlignment, leadingView: UIView, leadingViewMode: UITextFieldViewMode, trailingView: UIView, trailingViewMode: UITextFieldViewMode, clearButtonSideLength: number, clearButtonMode: UITextFieldViewMode, leftAssistiveLabel: UILabel, rightAssistiveLabel: UILabel, assistiveLabelDrawPriority: MDCTextControlAssistiveLabelDrawPriority, customAssistiveLabelDrawPriority: number, isRTL: boolean, isEditing: boolean): this;

	labelFrameWithLabelPosition(labelPosition: MDCTextControlLabelPosition): CGRect;
}

declare class MDCOutlinedTextArea extends MDCBaseTextArea {

	static alloc(): MDCOutlinedTextArea; // inherited from NSObject

	static appearance(): MDCOutlinedTextArea; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCOutlinedTextArea; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCOutlinedTextArea; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCOutlinedTextArea; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCOutlinedTextArea; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCOutlinedTextArea; // inherited from UIAppearance

	static new(): MDCOutlinedTextArea; // inherited from NSObject

	outlineColorForState(state: MDCTextControlState): UIColor;

	setOutlineColorForState(outlineColor: UIColor, state: MDCTextControlState): void;
}

declare class MDCOutlinedTextField extends MDCBaseTextField {

	static alloc(): MDCOutlinedTextField; // inherited from NSObject

	static appearance(): MDCOutlinedTextField; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCOutlinedTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCOutlinedTextField; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCOutlinedTextField; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCOutlinedTextField; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCOutlinedTextField; // inherited from UIAppearance

	static new(): MDCOutlinedTextField; // inherited from NSObject

	outlineColorForState(state: MDCTextControlState): UIColor;

	setOutlineColorForState(outlineColor: UIColor, state: MDCTextControlState): void;
}

interface MDCTextControl extends NSObjectProtocol {

	assistiveLabelDrawPriority: MDCTextControlAssistiveLabelDrawPriority;

	containerFrame: CGRect;

	containerStyle: MDCTextControlStyle;

	customAssistiveLabelDrawPriority: number;

	floatingFont: UIFont;

	label: UILabel;

	labelBehavior: MDCTextControlLabelBehavior;

	labelFrame: CGRect;

	labelPosition: MDCTextControlLabelPosition;

	leadingAssistiveLabel: UILabel;

	leadingView: UIView;

	leadingViewMode: UITextFieldViewMode;

	normalFont: UIFont;

	numberOfLinesOfVisibleText: number;

	preferredContainerHeight: number;

	textControlState: MDCTextControlState;

	trailingAssistiveLabel: UILabel;

	trailingView: UIView;

	trailingViewMode: UITextFieldViewMode;

	setTextControlColorViewModelForState(textControlColorViewModel: MDCTextControlColorViewModel, textFieldState: MDCTextControlState): void;

	textControlColorViewModelForState(textControlState: MDCTextControlState): MDCTextControlColorViewModel;
}
declare var MDCTextControl: {

	prototype: MDCTextControl;
};

declare const enum MDCTextControlAssistiveLabelDrawPriority {

	Leading = 0,

	Trailing = 1,

	Custom = 2
}

declare class MDCTextControlAssistiveLabelView extends UIView {

	static alloc(): MDCTextControlAssistiveLabelView; // inherited from NSObject

	static appearance(): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): MDCTextControlAssistiveLabelView; // inherited from UIAppearance

	static new(): MDCTextControlAssistiveLabelView; // inherited from NSObject

	layout: MDCTextControlAssistiveLabelViewLayout;

	readonly leadingAssistiveLabel: UILabel;

	readonly trailingAssistiveLabel: UILabel;
}

declare class MDCTextControlAssistiveLabelViewLayout extends NSObject {

	static alloc(): MDCTextControlAssistiveLabelViewLayout; // inherited from NSObject

	static new(): MDCTextControlAssistiveLabelViewLayout; // inherited from NSObject

	readonly calculatedHeight: number;

	readonly leadingAssistiveLabelFrame: CGRect;

	readonly trailingAssistiveLabelFrame: CGRect;

	constructor(o: { width: number; leadingAssistiveLabel: UILabel; trailingAssistiveLabel: UILabel; assistiveLabelDrawPriority: MDCTextControlAssistiveLabelDrawPriority; customAssistiveLabelDrawPriority: number; leadingEdgePadding: number; trailingEdgePadding: number; paddingAboveAssistiveLabels: number; paddingBelowAssistiveLabels: number; isRTL: boolean; });

	initWithWidthLeadingAssistiveLabelTrailingAssistiveLabelAssistiveLabelDrawPriorityCustomAssistiveLabelDrawPriorityLeadingEdgePaddingTrailingEdgePaddingPaddingAboveAssistiveLabelsPaddingBelowAssistiveLabelsIsRTL(superviewWidth: number, leadingAssistiveLabel: UILabel, trailingAssistiveLabel: UILabel, assistiveLabelDrawPriority: MDCTextControlAssistiveLabelDrawPriority, customAssistiveLabelDrawPriority: number, leadingEdgePadding: number, trailingEdgePadding: number, paddingAboveAssistiveLabels: number, paddingBelowAssistiveLabels: number, isRTL: boolean): this;
}

declare function MDCTextControlCalculateContainerHeightWhenNoFloatingLabelWithTextRowHeight(textRowHeight: number, numberOfTextRows: number, paddingAroundTextWhenNoFloatingLabel: number): number;

declare function MDCTextControlCalculateContainerHeightWithFloatingLabelHeight(floatingLabelHeight: number, textRowHeight: number, numberOfTextRows: number, paddingBetweenContainerTopAndFloatingLabel: number, paddingBetweenFloatingLabelAndEditingText: number, paddingBetweenEditingTextAndContainerBottom: number): number;

declare function MDCTextControlClampDensity(density: number): number;

declare class MDCTextControlColorViewModel extends NSObject {

	static alloc(): MDCTextControlColorViewModel; // inherited from NSObject

	static new(): MDCTextControlColorViewModel; // inherited from NSObject

	floatingLabelColor: UIColor;

	leadingAssistiveLabelColor: UIColor;

	normalLabelColor: UIColor;

	textColor: UIColor;

	trailingAssistiveLabelColor: UIColor;

	constructor(o: { state: MDCTextControlState; });

	initWithState(state: MDCTextControlState): this;
}

declare function MDCTextControlDefaultUITextFieldFont(): UIFont;

declare class MDCTextControlGradientManager extends NSObject {

	static alloc(): MDCTextControlGradientManager; // inherited from NSObject

	static new(): MDCTextControlGradientManager; // inherited from NSObject

	horizontalGradient: CAGradientLayer;

	verticalGradient: CAGradientLayer;

	combinedGradientMaskLayer(): CALayer;
}

interface MDCTextControlHorizontalPositioning {

	horizontalInterItemSpacing: number;

	leadingEdgePadding: number;

	trailingEdgePadding: number;
}
declare var MDCTextControlHorizontalPositioning: {

	prototype: MDCTextControlHorizontalPositioning;
};

declare class MDCTextControlHorizontalPositioningReference extends NSObject implements MDCTextControlHorizontalPositioning {

	static alloc(): MDCTextControlHorizontalPositioningReference; // inherited from NSObject

	static new(): MDCTextControlHorizontalPositioningReference; // inherited from NSObject

	horizontalInterItemSpacing: number; // inherited from MDCTextControlHorizontalPositioning

	leadingEdgePadding: number; // inherited from MDCTextControlHorizontalPositioning

	trailingEdgePadding: number; // inherited from MDCTextControlHorizontalPositioning
}

declare class MDCTextControlLabelAnimation extends NSObject {

	static alloc(): MDCTextControlLabelAnimation; // inherited from NSObject

	static animateLabelStateNormalLabelFrameFloatingLabelFrameNormalFontFloatingFontLabelTruncationIsPresentAnimationDurationCompletion(label: UILabel, labelPosition: MDCTextControlLabelPosition, normalLabelFrame: CGRect, floatingLabelFrame: CGRect, normalFont: UIFont, floatingFont: UIFont, labelTruncationIsPresent: boolean, animationDuration: number, completion: (p1: boolean) => void): void;

	static new(): MDCTextControlLabelAnimation; // inherited from NSObject
}

declare const enum MDCTextControlLabelBehavior {

	Floats = 0,

	Disappears = 1
}

declare const enum MDCTextControlLabelPosition {

	None = 0,

	Floating = 1,

	Normal = 2
}

declare function MDCTextControlLabelPositionWith(hasLabelText: boolean, hasText: boolean, canLabelFloat: boolean, isEditing: boolean): MDCTextControlLabelPosition;

declare function MDCTextControlLabelSizeWith(text: string, maxWidth: number, font: UIFont): CGSize;

declare function MDCTextControlPaddingValueWithMinimumPadding(minimumPadding: number, maximumPadding: number, density: number): number;

declare function MDCTextControlShouldDisplaySideViewWithSideView(sideView: UIView, viewMode: UITextFieldViewMode, isEditing: boolean): boolean;

declare function MDCTextControlShouldLayoutForFloatingLabelWithLabelPosition(labelPosition: MDCTextControlLabelPosition, labelBehavior: MDCTextControlLabelBehavior, labelText: string): boolean;

declare function MDCTextControlShouldPlaceholderBeVisibleWithPlaceholder(placeholder: string, text: string, labelPosition: MDCTextControlLabelPosition): boolean;

declare const enum MDCTextControlState {

	Normal = 0,

	Editing = 1,

	Disabled = 2
}

declare function MDCTextControlStateWith(isEnabled: boolean, isEditing: boolean): MDCTextControlState;

interface MDCTextControlStyle extends NSObjectProtocol {

	applyStyleToTextControlAnimationDuration(textControl: UIView, animationDuration: number): void;

	floatingFontWithNormalFont(font: UIFont): UIFont;

	horizontalPositioningReference(): MDCTextControlHorizontalPositioningReference;

	positioningReferenceWithFloatingFontLineHeightNormalFontLineHeightTextRowHeightNumberOfTextRowsDensityPreferredContainerHeightIsMultilineTextControl(floatingLabelHeight: number, normalFontLineHeight: number, textRowHeight: number, numberOfTextRows: number, density: number, preferredContainerHeight: number, isMultilineTextControl: boolean): MDCTextControlVerticalPositioningReference;

	removeStyleFrom(textControl: MDCTextControl): void;
}
declare var MDCTextControlStyle: {

	prototype: MDCTextControlStyle;
};

declare class MDCTextControlStyleBase extends NSObject implements MDCTextControlStyle {

	static alloc(): MDCTextControlStyleBase; // inherited from NSObject

	static new(): MDCTextControlStyleBase; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyStyleToTextControlAnimationDuration(textControl: UIView, animationDuration: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	floatingFontWithNormalFont(font: UIFont): UIFont;

	horizontalPositioningReference(): MDCTextControlHorizontalPositioningReference;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positioningReferenceWithFloatingFontLineHeightNormalFontLineHeightTextRowHeightNumberOfTextRowsDensityPreferredContainerHeightIsMultilineTextControl(floatingLabelHeight: number, normalFontLineHeight: number, textRowHeight: number, numberOfTextRows: number, density: number, preferredContainerHeight: number, isMultilineTextControl: boolean): MDCTextControlVerticalPositioningReference;

	removeStyleFrom(textControl: MDCTextControl): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class MDCTextControlStyleOutlined extends NSObject implements MDCTextControlStyle {

	static alloc(): MDCTextControlStyleOutlined; // inherited from NSObject

	static new(): MDCTextControlStyleOutlined; // inherited from NSObject

	outlineCornerRadius: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	applyStyleToTextControlAnimationDuration(textControl: UIView, animationDuration: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	floatingFontWithNormalFont(font: UIFont): UIFont;

	horizontalPositioningReference(): MDCTextControlHorizontalPositioningReference;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	outlineColorForState(state: MDCTextControlState): UIColor;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	positioningReferenceWithFloatingFontLineHeightNormalFontLineHeightTextRowHeightNumberOfTextRowsDensityPreferredContainerHeightIsMultilineTextControl(floatingLabelHeight: number, normalFontLineHeight: number, textRowHeight: number, numberOfTextRows: number, density: number, preferredContainerHeight: number, isMultilineTextControl: boolean): MDCTextControlVerticalPositioningReference;

	removeStyleFrom(textControl: MDCTextControl): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setOutlineColorForState(outlineColor: UIColor, state: MDCTextControlState): void;
}

interface MDCTextControlTextField extends MDCTextControl {

	sideViewAlignment: MDCTextControlTextFieldSideViewAlignment;
}
declare var MDCTextControlTextField: {

	prototype: MDCTextControlTextField;
};

declare const enum MDCTextControlTextFieldSideViewAlignment {

	CenteredInContainer = 0,

	AlignedWithText = 1
}

interface MDCTextControlVerticalPositioningReference extends NSObjectProtocol {

	containerHeightWithFloatingLabel: number;

	containerHeightWithoutFloatingLabel: number;

	paddingAboveAssistiveLabels: number;

	paddingAroundTextWhenNoFloatingLabel: number;

	paddingBelowAssistiveLabels: number;

	paddingBetweenContainerTopAndFloatingLabel: number;

	paddingBetweenContainerTopAndNormalLabel: number;

	paddingBetweenEditingTextAndContainerBottom: number;

	paddingBetweenFloatingLabelAndEditingText: number;
}
declare var MDCTextControlVerticalPositioningReference: {

	prototype: MDCTextControlVerticalPositioningReference;
};

declare class MDCTextControlVerticalPositioningReferenceBase extends NSObject implements MDCTextControlVerticalPositioningReference {

	static alloc(): MDCTextControlVerticalPositioningReferenceBase; // inherited from NSObject

	static new(): MDCTextControlVerticalPositioningReferenceBase; // inherited from NSObject

	readonly containerHeightWithFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly containerHeightWithoutFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly paddingAboveAssistiveLabels: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingAroundTextWhenNoFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBelowAssistiveLabels: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenContainerTopAndFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenContainerTopAndNormalLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenEditingTextAndContainerBottom: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenFloatingLabelAndEditingText: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { floatingFontLineHeight: number; normalFontLineHeight: number; textRowHeight: number; numberOfTextRows: number; density: number; preferredContainerHeight: number; isMultilineTextControl: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFloatingFontLineHeightNormalFontLineHeightTextRowHeightNumberOfTextRowsDensityPreferredContainerHeightIsMultilineTextControl(floatingLabelHeight: number, normalFontLineHeight: number, textRowHeight: number, numberOfTextRows: number, density: number, preferredContainerHeight: number, isMultilineTextControl: boolean): this;

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

declare class MDCTextControlVerticalPositioningReferenceOutlined extends NSObject implements MDCTextControlVerticalPositioningReference {

	static alloc(): MDCTextControlVerticalPositioningReferenceOutlined; // inherited from NSObject

	static new(): MDCTextControlVerticalPositioningReferenceOutlined; // inherited from NSObject

	readonly containerHeightWithFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly containerHeightWithoutFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly paddingAboveAssistiveLabels: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingAroundTextWhenNoFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBelowAssistiveLabels: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenContainerTopAndFloatingLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenContainerTopAndNormalLabel: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenEditingTextAndContainerBottom: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly paddingBetweenFloatingLabelAndEditingText: number; // inherited from MDCTextControlVerticalPositioningReference

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { floatingFontLineHeight: number; normalFontLineHeight: number; textRowHeight: number; numberOfTextRows: number; density: number; preferredContainerHeight: number; isMultilineTextControl: boolean; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithFloatingFontLineHeightNormalFontLineHeightTextRowHeightNumberOfTextRowsDensityPreferredContainerHeightIsMultilineTextControl(floatingLabelHeight: number, normalFontLineHeight: number, textRowHeight: number, numberOfTextRows: number, density: number, preferredContainerHeight: number, isMultilineTextControl: boolean): this;

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

declare var MaterialComponentsVersionNumber: number;

declare var MaterialComponentsVersionString: interop.Reference<number>;

declare var kMDCTextControlDefaultAnimationDuration: number;
