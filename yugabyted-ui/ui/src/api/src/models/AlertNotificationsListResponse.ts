// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { AlertNotificationData } from './AlertNotificationData';
// eslint-disable-next-line no-duplicate-imports
import type { PagingMetadata } from './PagingMetadata';


/**
 * 
 * @export
 * @interface AlertNotificationsListResponse
 */
export interface AlertNotificationsListResponse  {
  /**
   * 
   * @type {AlertNotificationData[]}
   * @memberof AlertNotificationsListResponse
   */
  data: AlertNotificationData[];
  /**
   * 
   * @type {PagingMetadata}
   * @memberof AlertNotificationsListResponse
   */
  _metadata: PagingMetadata;
}



