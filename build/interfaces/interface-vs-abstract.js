"use strict";
/**
 * Interfaces and abstract classes are both powerful tools in TypeScript for designing
 *  and organizing your code, but they serve slightly different purposes.
 */
/**
 * Aspect	        Interfaces	                                Abstract classes
 * ======           =====================================       ======================================================
 * Pupose:	        Define contractual structure	   ::         Provide common functionality and structure
 * Implementation:	Contains only method signatures.	 ::       Can contain implemented methods and abstract methods
 * Multiple Inheritance:	Supports multiple interface implementation ::	Support single class inheritance
 * Implementation Flexibility:	No implementation code in interface ::	Mixes implemented and abstract methods
 * Extensibility:	Easily extendable by adding new properties/methods :: Can provide shared methods for derived classes
 * Constructors:	    No contructors in interface	:: Can have contructors for initialization
 * Type checking:	Ensure objects adhere to the structure ::	Provides common type and functionality
 * Instantiation:	Interfaces can't be instantiated  ::	Abstract classes can't be instantiated directly
 * Usage: 	        Designing contracts and structure ::	Sharing functionality among related classes
 */
