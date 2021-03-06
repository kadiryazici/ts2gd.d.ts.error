
/**
 * Camera is a special node that displays what is visible from its current location. Cameras register themselves in the nearest [Viewport] node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a [Viewport], and, without one, a scene registered in that [Viewport] (or higher viewports) can't be displayed.
 *
*/
declare class Camera extends Spatial  {

  
/**
 * Camera is a special node that displays what is visible from its current location. Cameras register themselves in the nearest [Viewport] node (when ascending the tree). Only one camera can be active per viewport. If no viewport is available ascending the tree, the camera will register in the global viewport. In other words, a camera just provides 3D display capabilities to a [Viewport], and, without one, a scene registered in that [Viewport] (or higher viewports) can't be displayed.
 *
*/
  new(): Camera; 
  static "new"(): Camera 


/** The culling mask that describes which 3D render layers are rendered by this camera. */
cull_mask: int;

/** If [code]true[/code], the ancestor [Viewport] is currently using this camera. */
current: boolean;

/**
 * If not [constant DOPPLER_TRACKING_DISABLED], this camera will simulate the [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] for objects changed in particular `_process` methods. The Doppler effect is only simulated for [AudioStreamPlayer3D] nodes that have [member AudioStreamPlayer3D.doppler_tracking] set to a value other than [constant AudioStreamPlayer3D.DOPPLER_TRACKING_DISABLED].
 *
 * **Note:** To toggle the Doppler effect preview in the editor, use the Perspective menu in the top-left corner of the 3D viewport and toggle **Enable Doppler**.
 *
*/
doppler_tracking: int;

/** The [Environment] to use for this camera. */
environment: Environment;

/** The distance to the far culling boundary for this camera relative to its local Z axis. */
far: float;

/**
 * The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, `fov` sets the other axis' field of view angle.
 *
 * For reference, the default vertical field of view value (`70.0`) is equivalent to a horizontal FOV of:
 *
 * - ~86.07 degrees in a 4:3 viewport
 *
 * - ~96.50 degrees in a 16:10 viewport
 *
 * - ~102.45 degrees in a 16:9 viewport
 *
 * - ~117.06 degrees in a 21:9 viewport
 *
*/
fov: float;

/** The camera's frustum offset. This can be changed from the default to create "tilted frustum" effects such as [url=https://zdoom.org/wiki/Y-shearing]Y-shearing[/url]. */
frustum_offset: Vector2;

/** The horizontal (X) offset of the camera viewport. */
h_offset: float;

/** The axis to lock during [member fov]/[member size] adjustments. Can be either [constant KEEP_WIDTH] or [constant KEEP_HEIGHT]. */
keep_aspect: int;

/** The distance to the near culling boundary for this camera relative to its local Z axis. */
near: float;

/** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
projection: int;

/** The camera's size measured as 1/2 the width or height. Only applicable in orthogonal mode. Since [member keep_aspect] locks on axis, [code]size[/code] sets the other axis' size length. */
size: float;

/** The vertical (Y) offset of the camera viewport. */
v_offset: float;

/** If this is the current camera, remove it from being current. If [code]enable_next[/code] is [code]true[/code], request to make the next camera current, if any. */
clear_current(enable_next?: boolean): void;

/** Returns the camera's RID from the [VisualServer]. */
get_camera_rid(): RID;

/** Returns the transform of the camera plus the vertical ([member v_offset]) and horizontal ([member h_offset]) offsets; and any other adjustments made to the position and orientation of the camera by subclassed cameras such as [ClippedCamera], [InterpolatedCamera] and [ARVRCamera]. */
get_camera_transform(): Transform;

/** Returns [code]true[/code] if the given [code]layer[/code] in the [member cull_mask] is enabled, [code]false[/code] otherwise. */
get_cull_mask_bit(layer: int): boolean;

/** Returns the camera's frustum planes in world space units as an array of [Plane]s in the following order: near, far, left, top, right, bottom. Not to be confused with [member frustum_offset]. */
get_frustum(): any[];

/**
 * Returns `true` if the given position is behind the camera.
 *
 * **Note:** A position which returns `false` may still be outside the camera's field of view.
 *
*/
is_position_behind(world_point: Vector3): boolean;

/** Makes this camera the current camera for the [Viewport] (see class description). If the camera node is outside the scene tree, it will attempt to become current once it's added. */
make_current(): void;

/** Returns a normal vector from the screen point location directed along the camera. Orthogonal cameras are normalized. Perspective cameras account for perspective, screen width/height, etc. */
project_local_ray_normal(screen_point: Vector2): Vector3;

/** Returns the 3D point in world space that maps to the given 2D coordinate in the [Viewport] rectangle on a plane that is the given [code]z_depth[/code] distance into the scene away from the camera. */
project_position(screen_point: Vector2, z_depth: float): Vector3;

/** Returns a normal vector in world space, that is the result of projecting a point on the [Viewport] rectangle by the camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
project_ray_normal(screen_point: Vector2): Vector3;

/** Returns a 3D position in world space, that is the result of projecting a point on the [Viewport] rectangle by the camera projection. This is useful for casting rays in the form of (origin, normal) for object intersection or picking. */
project_ray_origin(screen_point: Vector2): Vector3;

/** Enables or disables the given [code]layer[/code] in the [member cull_mask]. */
set_cull_mask_bit(layer: int, enable: boolean): void;

/** Sets the camera projection to frustum mode (see [constant PROJECTION_FRUSTUM]), by specifying a [code]size[/code], an [code]offset[/code], and the [code]z_near[/code] and [code]z_far[/code] clip planes in world space units. */
set_frustum(size: float, offset: Vector2, z_near: float, z_far: float): void;

/** Sets the camera projection to orthogonal mode (see [constant PROJECTION_ORTHOGONAL]), by specifying a [code]size[/code], and the [code]z_near[/code] and [code]z_far[/code] clip planes in world space units. (As a hint, 2D games often use this projection, with values specified in pixels.) */
set_orthogonal(size: float, z_near: float, z_far: float): void;

/** Sets the camera projection to perspective mode (see [constant PROJECTION_PERSPECTIVE]), by specifying a [code]fov[/code] (field of view) angle in degrees, and the [code]z_near[/code] and [code]z_far[/code] clip planes in world space units. */
set_perspective(fov: float, z_near: float, z_far: float): void;

/**
 * Returns the 2D coordinate in the [Viewport] rectangle that maps to the given 3D point in world space.
 *
 * **Note:** When using this to position GUI elements over a 3D viewport, use [method is_position_behind] to prevent them from appearing if the 3D point is behind the camera:
 *
 * @example 
 * 
 * # This code block is part of a script that inherits from Spatial.
 * # `control` is a reference to a node inheriting from Control.
 * control.visible = not get_viewport().get_camera().is_position_behind(global_transform.origin)
 * control.rect_position = get_viewport().get_camera().unproject_position(global_transform.origin)
 * @summary 
 * 
 *
*/
unproject_position(world_point: Vector3): Vector2;

  connect<T extends SignalsOf<Camera>>(signal: T, method: SignalFunction<Camera[T]>): number;



/**
 * Perspective projection. Objects on the screen becomes smaller when they are far away.
 *
*/
static PROJECTION_PERSPECTIVE: any;

/**
 * Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are.
 *
*/
static PROJECTION_ORTHOGONAL: any;

/**
 * Frustum projection. This mode allows adjusting [member frustum_offset] to create "tilted frustum" effects.
 *
*/
static PROJECTION_FRUSTUM: any;

/**
 * Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV.
 *
*/
static KEEP_WIDTH: any;

/**
 * Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV.
 *
*/
static KEEP_HEIGHT: any;

/**
 * Disables [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] simulation (default).
 *
*/
static DOPPLER_TRACKING_DISABLED: any;

/**
 * Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how Audio is perceived (changing the Audio's `pitch shift`).
 *
*/
static DOPPLER_TRACKING_IDLE_STEP: any;

/**
 * Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how Audio is perceived (changing the Audio's `pitch shift`).
 *
*/
static DOPPLER_TRACKING_PHYSICS_STEP: any;



}

