//
//  ReactNativeModule.m
//  RN_App
//
//  Created by Phung Phan Van on 15/02/2024.
//

#import <Foundation/Foundation.h>
#import <React/RCTLog.h>
#import "ReactNativeModule.h"

@implementation TestNativeModule

RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
