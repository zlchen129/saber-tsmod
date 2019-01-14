import { IPackageInfor } from '../tasks/__init__';
/**
 * reloadPackage
 *
 * @export
 * @param {(packageData: IPackageInfor) => IPackageInfor} callback
 */
export declare const reloadPackage: (callback: (packageData: IPackageInfor) => IPackageInfor) => Promise<void>;
