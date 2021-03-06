
/**
 * Capsule shape for 2D collisions.
 *
*/
declare class CapsuleShape2D extends Shape2D  {

  
/**
 * Capsule shape for 2D collisions.
 *
*/
  new(): CapsuleShape2D; 
  static "new"(): CapsuleShape2D 


/** The capsule's height. */
height: float;

/** The capsule's radius. */
radius: float;



  connect<T extends SignalsOf<CapsuleShape2D>>(signal: T, method: SignalFunction<CapsuleShape2D[T]>): number;






}

