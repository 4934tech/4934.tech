'use client'

import { motion, useInView } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/Card"
import { useRef } from 'react'

interface Stat {
    id: number;
    name: string;
    value: string;
}

interface StatsProps {
    stats: Stat[];
}

export default function Stats({ stats }: StatsProps) {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {stats.map((stat, index) => (
                        <StatCard key={stat.id} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <Card className="overflow-hidden bg-black/40 border-transparent sm:rounded-3xl">
                <CardContent className="p-6">
                    <dt className="text-sm font-medium text-gray-400 mb-2">{stat.name}</dt>
                    <dd className="text-4xl font-bold text-white tracking-tight">
                        {stat.value}
                    </dd>
                </CardContent>
            </Card>
        </motion.div>
    )
}

