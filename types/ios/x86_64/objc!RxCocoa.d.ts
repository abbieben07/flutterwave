
declare var RXAbortOnThreadingHazard: boolean;

interface RXDeallocatingObserver {

	targetImplementation: interop.FunctionReference<() => void>;

	deallocating(): void;
}
declare var RXDeallocatingObserver: {

	prototype: RXDeallocatingObserver;
};

interface RXMessageSentObserver {

	targetImplementation: interop.FunctionReference<() => void>;

	messageSentWithArguments(_arguments: NSArray<any> | any[]): void;

	methodInvokedWithArguments(_arguments: NSArray<any> | any[]): void;
}
declare var RXMessageSentObserver: {

	prototype: RXMessageSentObserver;
};

declare const enum RXObjCRuntimeError {

	Unknown = 1,

	ObjectMessagesAlreadyBeingIntercepted = 2,

	SelectorNotImplemented = 3,

	CantInterceptCoreFoundationTollFreeBridgedObjects = 4,

	ThreadingCollisionWithOtherInterceptionMechanism = 5,

	SavingOriginalForwardingMethodFailed = 6,

	ReplacingMethodWithForwardingImplementation = 7,

	ObservingPerformanceSensitiveMessages = 8,

	ObservingMessagesWithUnsupportedReturnType = 9
}

declare var RXObjCRuntimeErrorDomain: string;

declare var RXObjCRuntimeErrorIsKVOKey: string;

declare function RX_default_target_implementation(): interop.FunctionReference<() => void>;

declare function RX_ensure_observing(target: any, selector: string, error: interop.Pointer | interop.Reference<NSError>): interop.FunctionReference<() => void>;

declare function RX_extract_arguments(invocation: NSInvocation): NSArray<any>;

declare function RX_is_method_signature_void(methodSignature: NSMethodSignature): boolean;

declare function RX_is_method_with_description_void(method: objc_method_description): boolean;

declare function RX_reference_from_selector(selector: string): interop.Pointer | interop.Reference<any>;

declare function RX_selector(selector: string): string;

declare var RxCocoaVersionNumber: number;

declare var RxCocoaVersionNumberVar: number;

declare var RxCocoaVersionNumberVar2: number;

declare var RxCocoaVersionString: interop.Reference<number>;

declare var RxCocoaVersionStringVar: interop.Reference<number>;

declare var RxCocoaVersionStringVar2: interop.Reference<number>;

declare class _RXDelegateProxy extends NSObject {

	static alloc(): _RXDelegateProxy; // inherited from NSObject

	static new(): _RXDelegateProxy; // inherited from NSObject

	readonly _forwardToDelegate: any;

	_methodInvokedWithArguments(selector: string, _arguments: NSArray<any> | any[]): void;

	_sentMessageWithArguments(selector: string, _arguments: NSArray<any> | any[]): void;

	_setForwardToDelegateRetainDelegate(forwardToDelegate: any, retainDelegate: boolean): void;

	hasWiredImplementationForSelector(selector: string): boolean;

	voidDelegateMethodsContain(selector: string): boolean;
}

declare class _RXKVOObserver extends NSObject {

	static alloc(): _RXKVOObserver; // inherited from NSObject

	static new(): _RXKVOObserver; // inherited from NSObject

	constructor(o: { target: any; retainTarget: boolean; keyPath: string; options: NSKeyValueObservingOptions; callback: (p1: any) => void; });

	dispose(): void;

	initWithTargetRetainTargetKeyPathOptionsCallback(target: any, retainTarget: boolean, keyPath: string, options: NSKeyValueObservingOptions, callback: (p1: any) => void): this;
}
