import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import { Dot } from "lucide-react";
import { voice_features_card } from "..";

export function FeatureCard() {
  return (
    <div className='grid md:grid-cols-2 gap-8 mb-12'>
      {voice_features_card.map((item) => (
        <Card
          key={item.title + "feature-item"}
          className='relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30'>
          <div className='absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
          <CardHeader className='relative'>
            <CardTitle className='flex items-center gap-2'>
              <div className='size-10 bg-linear-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center'>
                <item.titleIcon className='size-5 text-primary' />
              </div>
              {item.title}
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent className='relative space-y-4'>
            {item.features.map((feature) => (
              <React.Fragment key={feature.label + "voice-feature"}>
                {feature.Icon ? (
                  <div className='flex items-center p-3 bg-muted/30 rounded-xl'>
                    <div className='w-8 h-8 bg-linear-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mr-3'>
                      <feature.Icon className='size-4 text-primary' />
                    </div>
                    <span className='font-medium text-sm'>{feature.label}</span>
                  </div>
                ) : (
                  <div className='flex items-start gap-3'>
                    <Dot className='size-2 bg-primary rounded-full mt-2' />
                    <span className='text-sm'>{feature.label}</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
